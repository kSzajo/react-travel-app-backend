import { Router } from "express";

export abstract class AbstractController {
    public abstract router: Router;
    public abstract init(): AbstractController;
}