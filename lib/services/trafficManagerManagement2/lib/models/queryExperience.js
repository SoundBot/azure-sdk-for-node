/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a Traffic Manager HeatMap query experience properties.
 *
 */
class QueryExperience {
  /**
   * Create a QueryExperience.
   * @member {number} [endpointId] The id of the endpoint from the 'endpoints'
   * array which these queries were routed to.
   * @member {number} [queryCount] The number of queries originating from this
   * location.
   * @member {number} [latency] The latency experienced by queries originating
   * from this location.
   */
  constructor() {
  }

  /**
   * Defines the metadata of QueryExperience
   *
   * @returns {object} metadata of QueryExperience
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'QueryExperience',
      type: {
        name: 'Composite',
        className: 'QueryExperience',
        modelProperties: {
          endpointId: {
            required: false,
            serializedName: 'endpointId',
            type: {
              name: 'Number'
            }
          },
          queryCount: {
            required: false,
            serializedName: 'queryCount',
            type: {
              name: 'Number'
            }
          },
          latency: {
            required: false,
            serializedName: 'latency',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = QueryExperience;
