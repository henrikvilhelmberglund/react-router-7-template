import type { Route } from "../+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About" }, { name: "description", content: "About page" }];
}

export default function Index() {
  return (
    <h1>
    About page
    </h1>
  );
}
