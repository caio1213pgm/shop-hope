import { PropsChildren } from "../layout/Design";

function ContainerProducts({ children }: PropsChildren) {
  return (
    <div className=" bg-blue-400 flex flex-wrap justify-center p-5 gap-y-3 gap-x-10 w-full min-h-[calc(100vh-82px-82px)]">
      {children}
    </div>
  );
}

export default ContainerProducts;
