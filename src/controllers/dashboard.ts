import { Request, Response } from 'express';

/**
 * Example controller that provides a healthcheck endpoint
 */
module Dashboard {

  'use strict';

  /*
   * Return an empty 200 response
   */
  export function dashboardData (req: Request, res: Response) {
    res.end();
  }

}

export = Dashboard;
