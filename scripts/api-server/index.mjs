import waitOn from "wait-on";
import open from "open";
import { spawn } from "node:child_process";

spawn(
  "dotnet",
  ["run", "--lp", "https", "--project", "./apps/api/src/Api/LAMB.Api.Host"],
  {
    stdio: "inherit",
  },
);

try {
  await waitOn({
    resources: ["http-get://localhost:5128/swagger/index.html"],
    delay: 30000,
    interval: 2000,
    timeout: 1200000,
  });

  try {
    await open("http://localhost:5128/swagger/index.html");
  } catch (err) {
    console.log("Open: ", err);
  }
} catch (error) {
  console.error("waitOn: ", error);
}
