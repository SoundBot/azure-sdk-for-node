/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.14.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the ExpressRouteCircuitPeering class.
 * @constructor
 * Peering in a ExpressRouteCircuit resource
 * @member {string} [name] Gets name of the resource that is unique within a
 * resource group. This name can be used to access the resource
 * 
 * @member {string} [etag] A unique read-only string that changes whenever the
 * resource is updated
 * 
 * @member {string} [peeringType] Gets or sets PeeringType. Possible values
 * for this property include: 'AzurePublicPeering', 'AzurePrivatePeering',
 * 'MicrosoftPeering'.
 * 
 * @member {string} [state] Gets or sets state of Peering. Possible values for
 * this property include: 'Disabled', 'Enabled'.
 * 
 * @member {number} [azureASN] Gets or sets the azure ASN
 * 
 * @member {number} [peerASN] Gets or sets the peer ASN
 * 
 * @member {string} [primaryPeerAddressPrefix] Gets or sets the primary
 * address prefix
 * 
 * @member {string} [secondaryPeerAddressPrefix] Gets or sets the secondary
 * address prefix
 * 
 * @member {string} [primaryAzurePort] Gets or sets the primary port
 * 
 * @member {string} [secondaryAzurePort] Gets or sets the secondary port
 * 
 * @member {string} [sharedKey] Gets or sets the shared key
 * 
 * @member {number} [vlanId] Gets or sets the vlan id
 * 
 * @member {object} [microsoftPeeringConfig] Gets or sets the mircosoft
 * peering config
 * 
 * @member {array} [microsoftPeeringConfig.advertisedPublicPrefixes] Gets or
 * sets the reference of AdvertisedPublicPrefixes
 * 
 * @member {string} [microsoftPeeringConfig.advertisedPublicPrefixesState]
 * Gets or sets AdvertisedPublicPrefixState of the Peering resource .
 * Possible values for this property include: 'NotConfigured', 'Configuring',
 * 'Configured', 'ValidationNeeded'.
 * 
 * @member {number} [microsoftPeeringConfig.customerASN] Gets or Sets
 * CustomerAsn of the peering.
 * 
 * @member {string} [microsoftPeeringConfig.routingRegistryName] Gets or Sets
 * RoutingRegistryName of the config.
 * 
 * @member {object} [stats] Gets or peering stats
 * 
 * @member {number} [stats.bytesIn] Gets BytesIn of the peering.
 * 
 * @member {number} [stats.bytesOut] Gets BytesOut of the peering.
 * 
 * @member {string} [provisioningState] Gets or sets Provisioning state of the
 * PublicIP resource Updating/Deleting/Failed
 * 
 */
function ExpressRouteCircuitPeering() {
  ExpressRouteCircuitPeering['super_'].call(this);
}

util.inherits(ExpressRouteCircuitPeering, models['SubResource']);

/**
 * Defines the metadata of ExpressRouteCircuitPeering
 *
 * @returns {object} metadata of ExpressRouteCircuitPeering
 *
 */
ExpressRouteCircuitPeering.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ExpressRouteCircuitPeering',
    type: {
      name: 'Composite',
      className: 'ExpressRouteCircuitPeering',
      modelProperties: {
        id: {
          required: false,
          serializedName: 'id',
          type: {
            name: 'String'
          }
        },
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        etag: {
          required: false,
          serializedName: 'etag',
          type: {
            name: 'String'
          }
        },
        peeringType: {
          required: false,
          serializedName: 'properties.peeringType',
          type: {
            name: 'String'
          }
        },
        state: {
          required: false,
          serializedName: 'properties.state',
          type: {
            name: 'String'
          }
        },
        azureASN: {
          required: false,
          serializedName: 'properties.azureASN',
          type: {
            name: 'Number'
          }
        },
        peerASN: {
          required: false,
          serializedName: 'properties.peerASN',
          type: {
            name: 'Number'
          }
        },
        primaryPeerAddressPrefix: {
          required: false,
          serializedName: 'properties.primaryPeerAddressPrefix',
          type: {
            name: 'String'
          }
        },
        secondaryPeerAddressPrefix: {
          required: false,
          serializedName: 'properties.secondaryPeerAddressPrefix',
          type: {
            name: 'String'
          }
        },
        primaryAzurePort: {
          required: false,
          serializedName: 'properties.primaryAzurePort',
          type: {
            name: 'String'
          }
        },
        secondaryAzurePort: {
          required: false,
          serializedName: 'properties.secondaryAzurePort',
          type: {
            name: 'String'
          }
        },
        sharedKey: {
          required: false,
          serializedName: 'properties.sharedKey',
          type: {
            name: 'String'
          }
        },
        vlanId: {
          required: false,
          serializedName: 'properties.vlanId',
          type: {
            name: 'Number'
          }
        },
        microsoftPeeringConfig: {
          required: false,
          serializedName: 'properties.microsoftPeeringConfig',
          type: {
            name: 'Composite',
            className: 'ExpressRouteCircuitPeeringConfig'
          }
        },
        stats: {
          required: false,
          serializedName: 'properties.stats',
          type: {
            name: 'Composite',
            className: 'ExpressRouteCircuitStats'
          }
        },
        provisioningState: {
          required: false,
          serializedName: 'properties.provisioningState',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ExpressRouteCircuitPeering;