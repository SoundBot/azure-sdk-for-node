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

const models = require('./index');

/**
 * Defines a group of previously recognized entities.
 *
 */
class RecognizedEntityGroup {
  /**
   * Create a RecognizedEntityGroup.
   * @member {array} recognizedEntityRegions The regions of the image that
   * contain entities.
   * @member {string} name The name of the group where images of the entity
   * were also found. The following are possible groups.
   * CelebRecognitionAnnotations: Similar to CelebrityAnnotations but provides
   * a higher probability of an accurate match. CelebrityAnnotations: Contains
   * celebrities such as actors, politicians, athletes, and historical figures.
   */
  constructor() {
  }

  /**
   * Defines the metadata of RecognizedEntityGroup
   *
   * @returns {object} metadata of RecognizedEntityGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'RecognizedEntityGroup',
      type: {
        name: 'Composite',
        className: 'RecognizedEntityGroup',
        modelProperties: {
          recognizedEntityRegions: {
            required: true,
            serializedName: 'recognizedEntityRegions',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RecognizedEntityRegionElementType',
                  type: {
                    name: 'Composite',
                    polymorphicDiscriminator: {
                      serializedName: '_type',
                      clientName: '_type'
                    },
                    uberParent: 'ResponseBase',
                    className: 'RecognizedEntityRegion'
                  }
              }
            }
          },
          name: {
            required: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = RecognizedEntityGroup;
