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
 * The X12 agreement framing settings.
 *
 */
class X12FramingSettings {
  /**
   * Create a X12FramingSettings.
   * @member {number} dataElementSeparator The data element separator.
   * @member {number} componentSeparator The component separator.
   * @member {boolean} replaceSeparatorsInPayload The value indicating whether
   * to replace separators in payload.
   * @member {number} replaceCharacter The replacement character.
   * @member {number} segmentTerminator The segment terminator.
   * @member {string} characterSet The X12 character set. Possible values
   * include: 'NotSpecified', 'Basic', 'Extended', 'UTF8'
   * @member {string} segmentTerminatorSuffix The segment terminator suffix.
   * Possible values include: 'NotSpecified', 'None', 'CR', 'LF', 'CRLF'
   */
  constructor() {
  }

  /**
   * Defines the metadata of X12FramingSettings
   *
   * @returns {object} metadata of X12FramingSettings
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'X12FramingSettings',
      type: {
        name: 'Composite',
        className: 'X12FramingSettings',
        modelProperties: {
          dataElementSeparator: {
            required: true,
            serializedName: 'dataElementSeparator',
            type: {
              name: 'Number'
            }
          },
          componentSeparator: {
            required: true,
            serializedName: 'componentSeparator',
            type: {
              name: 'Number'
            }
          },
          replaceSeparatorsInPayload: {
            required: true,
            serializedName: 'replaceSeparatorsInPayload',
            type: {
              name: 'Boolean'
            }
          },
          replaceCharacter: {
            required: true,
            serializedName: 'replaceCharacter',
            type: {
              name: 'Number'
            }
          },
          segmentTerminator: {
            required: true,
            serializedName: 'segmentTerminator',
            type: {
              name: 'Number'
            }
          },
          characterSet: {
            required: true,
            serializedName: 'characterSet',
            type: {
              name: 'Enum',
              allowedValues: [ 'NotSpecified', 'Basic', 'Extended', 'UTF8' ]
            }
          },
          segmentTerminatorSuffix: {
            required: true,
            serializedName: 'segmentTerminatorSuffix',
            type: {
              name: 'Enum',
              allowedValues: [ 'NotSpecified', 'None', 'CR', 'LF', 'CRLF' ]
            }
          }
        }
      }
    };
  }
}

module.exports = X12FramingSettings;
