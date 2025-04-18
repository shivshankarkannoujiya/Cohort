import type { Request, Response } from "express";

class healthController {
  public handleHealthCheck(req: Request, res: Response): void {
    res.status(200).json({
      status: "Healthy",
    });
  }
}

export default healthController;
