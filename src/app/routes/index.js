import { Router } from "express";
import { UserRoutes } from "../modules/users/user.route.js";
import { TaskRoutes } from "../modules/task/task.route.js";
import { AuthRoutes } from "../modules/auth/auth.route.js";

export const router = Router();
const modulesRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/task",
    route: TaskRoutes,
  },
];
modulesRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
