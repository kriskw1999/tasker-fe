import { Favorite } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="flex justify-between px-10 py-4 fixed bottom-0 right-0 left-0 bg-white">
      <div className="flex gap-1">
        <p>Made with</p> <Favorite className="text-accent" />
        <p>by</p>
        <a
          className="text-primary underline"
          href="https://github.com/kriskw1999"
          target="_blank"
          rel="noreferrer"
        >
          Krzysztof Witkowski
        </a>
      </div>

      <p className="text-primary underline">Contact us</p>
    </footer>
  );
};

export default Footer;
