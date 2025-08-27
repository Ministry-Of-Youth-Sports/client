import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginPage = () => {
  return (
    <div className="bg-popover-foreground h-screen flex justify-center items-center">
      <form className="border-muted-foreground border-[1px] rounded-2xl p-8 min-w-[200px] sm:min-w-[600px] bg-primary">
        <h1 className="text-2xl text-center text-white mb-14"> الدخول</h1>

        <div className="mb-8">
          <label htmlFor="email" className="text-white mb-4 block">
            البريد الالكتروني
          </label>
          <Input
            id="email"
            type="email"
            placeholder="البريد الالكتروني"
            className="border-muted-foreground text-white"
          />
        </div>

        <div>
          <label htmlFor="pass" className="text-white mb-4 block">
            كلمة المرور
          </label>
          <Input
            id="pass"
            type="password"
            placeholder="كلمة المرور"
            className="border-muted-foreground text-white"
          />
        </div>

        <Button className="w-full mt-8 cursor-pointer" variant={"secondary"}>
          تسجيل الدخول
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
