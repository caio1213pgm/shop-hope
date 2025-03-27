import { Copyright } from "lucide-react";

function Footer() {
  return (
    <footer>
      <div className="w-full bg-blue-700 p-6 flex items-center gap-2">
        <p className="text-white">SHOPHOPE - Todos os direitos reservados</p>
        <Copyright color="white" />
      </div>
      <div></div>
    </footer>
  );
}
export default Footer;
