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
 * A base type for the health state of various entities in the cluster. It
 * contains the aggregated health state.
 *
 */
class EntityHealthState {
  /**
   * Create a EntityHealthState.
   * @member {string} [aggregatedHealthState] Possible values include:
   * 'Invalid', 'Ok', 'Warning', 'Error', 'Unknown'
   */
  constructor() {
  }

  /**
   * Defines the metadata of EntityHealthState
   *
   * @returns {object} metadata of EntityHealthState
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'EntityHealthState',
      type: {
        name: 'Composite',
        className: 'EntityHealthState',
        modelProperties: {
          aggregatedHealthState: {
            required: false,
            serializedName: 'AggregatedHealthState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = EntityHealthState;