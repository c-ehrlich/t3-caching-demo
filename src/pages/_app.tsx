// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Link from "next/link";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/otherpage">
        <a>Other Page</a>
      </Link>
      <Component {...pageProps} />;
      <ReactQueryDevtools initialIsOpen={true} />
    </div>
  );
};

export default trpc.withTRPC(MyApp);
