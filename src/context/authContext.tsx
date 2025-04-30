import { createContext, useContext, useEffect, useState } from "react";

type userProps = {
  email: string;
  password: string;
  username: string
};

type authProps = {
  user: userProps | undefined | null;
  SingIn: (user: userProps) => string | void;
  SingUp: (user: userProps) => string | void;
  SingOut: () => void;
};

const AuthContext = createContext<authProps>({
  user: { email: "", password: "" , username: ""},
  SingIn: () => "",
  SingUp: () => "",
  SingOut: () => [],
});

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<userProps | null>();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const usersStorage = localStorage.getItem("users_bd");

    try {
      if (userToken && usersStorage) {
        const parsedToken: userProps = JSON.parse(userToken);
        const users: userProps[] = JSON.parse(usersStorage);
        const hasUser = users.filter(
          (user) => user.email === parsedToken.email
        );

        if (hasUser.length > 0) {
          setUser(hasUser[0]);
        }
      }
    } catch (error) {
      console.log("Erro ao processar dados do localStorage: ", error);
    }
  }, []);

  function SingIn({ email, password, username }: userProps): string | void {
    const usersStorage = localStorage.getItem("users_bd");

    if (usersStorage) {
      const users: userProps[] = JSON.parse(usersStorage);
      const hasUser = users.filter((user) => user.email === email);

      if (hasUser.length > 0) {
        if (hasUser[0].password === password && hasUser[0].username === username) {
          const token = Math.random().toString(36).substring(2);
          localStorage.setItem("user_token", JSON.stringify({ email, token }));
          setUser({ email, password, username });
          return;
        } else {
          return "email, senha ou nome de usuário incorretos";
        }
      } else {
        return "nenhum usuário cadastrado";
      }
    }

    return "Nenhum usuário cadastrado no sistema";
  }

  function SingUp({ email, password, username }: userProps) {
    const usersStorage = localStorage.getItem("users_bd");
    const users: userProps[] = usersStorage ? JSON.parse(usersStorage) : [];

    const hashUser = users.find((user) => user.email === email);

    if (hashUser) {
      return "Email indisponível";
    }

    const newUserList: userProps[] = [...users, { email, password, username }];
    localStorage.setItem("users_bd", JSON.stringify(newUserList));
    return;
  }

  function SingOut() {
    setUser(null);
    localStorage.removeItem("user_token");
  }

  return (
    <AuthContext.Provider value={{ user, SingIn, SingUp, SingOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(){
  return useContext(AuthContext)
}
