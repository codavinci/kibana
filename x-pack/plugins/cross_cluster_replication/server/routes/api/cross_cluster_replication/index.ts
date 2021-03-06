/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { RouteDependencies } from '../../../types';
import { registerPermissionsRoute } from './register_permissions_route';
import { registerStatsRoute } from './register_stats_route';

export function registerCrossClusterReplicationRoutes(dependencies: RouteDependencies) {
  registerPermissionsRoute(dependencies);
  registerStatsRoute(dependencies);
}
