import { Router } from "express";
import { UserRoutes } from "../modules/users/user.route";
import { TaskRoutes } from "../modules/task/task.route";
import { AuthRoutes } from "../modules/auth/auth.route";

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
