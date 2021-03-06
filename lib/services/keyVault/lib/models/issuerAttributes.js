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
 * The attributes of an issuer managed by the Key Vault service.
 *
 */
class IssuerAttributes {
  /**
   * Create a IssuerAttributes.
   * @member {boolean} [enabled] Determines whether the issuer is enabled.
   * @member {date} [created] Creation time in UTC.
   * @member {date} [updated] Last updated time in UTC.
   */
  constructor() {
  }

  /**
   * Defines the metadata of IssuerAttributes
   *
   * @returns {object} metadata of IssuerAttributes
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'IssuerAttributes',
      type: {
        name: 'Composite',
        className: 'IssuerAttributes',
        modelProperties: {
          enabled: {
            required: false,
            serializedName: 'enabled',
            type: {
              name: 'Boolean'
            }
          },
          created: {
            required: false,
            readOnly: true,
            serializedName: 'created',
            type: {
              name: 'UnixTime'
            }
          },
          updated: {
            required: false,
            readOnly: true,
            serializedName: 'updated',
            type: {
              name: 'UnixTime'
            }
          }
        }
      }
    };
  }
}

module.exports = IssuerAttributes;
