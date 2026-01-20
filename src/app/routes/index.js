import { Router } from "express";
import { UserRoutes } from "../modules/users/user.route";

export const router = Router();
const modulesRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/task",
    route: TaskRoutes,
  },
];
modulesRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
