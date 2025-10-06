import SectionTitle from "./SectionTitle";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Newsletter = () => {
  return (
    <section id="contact-us" className="mt-20">
      {/* Title & Description */}
      <SectionTitle
        title={" 📩 Join Our Newsletter"}
        description={
          "🚀 Stay updated with our latest news, 💎 exclusive offers, and 🎉 much more."
        }
      />

      {/* Input + Button */}
      <form className="flex items-center gap-2 max-w-xl mt-5 mx-auto">
        <Input
          type="email"
          placeholder="✉️ Enter your email"
          aria-label="Email for newsletter subscription"
          className="flex-1"
        />
        <Button variant={"destructive"}>✅ Subscribe</Button>
      </form>
    </section>
  );
};

export default Newsletter;
