// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.10;

import {Script, console2} from "forge-std/Script.sol";

abstract contract Helper is Script {
    /**
     * The address of Send token deployed to mainnet.
     */
    address constant SEND_TOKEN = 0x3f14920c99BEB920Afa163031c4e47a3e03B3e4A;
    /**
     * The address of the Send manager and deployer on mainnet.
     */
    address constant SEND_DEPLOYER = 0x647eb43401e13e995D89Cf26cD87e68890EE3f89;
    /**
     * [Send: DEX & CEX Listings](https://etherscan.io/address/0xF530e6E60e7a65Ea717f843a8b2e6fcdC727aC9E)
     * @notice Only on Mainnet
     *
     */
    address constant SEND_EX_LISTINGS_SAFE = 0xF530e6E60e7a65Ea717f843a8b2e6fcdC727aC9E;
    /**
     * [Send: Treasury](https://etherscan.io/address/0x4bB2f4c771ccB60723a78a974a2537AD339071c7)
     * @notice Only on Mainnet
     *
     */
    address constant SEND_TREASURY_SAFE = 0x4bB2f4c771ccB60723a78a974a2537AD339071c7;
    /**
     * [Send: Airdrops](https://etherscan.io/address/0x6204Bc0662ccd8a9A762d59fe7906733f251E3b7)
     * @notice Only on Mainnet
     *
     */
    address constant SEND_AIRDROPS_SAFE = 0x6204Bc0662ccd8a9A762d59fe7906733f251E3b7;
    /**
     * [Send: Core Team](https://etherscan.io/address/0xE52D0967A2eE242098d11c209f53C8158E329eCC)
     * @notice Only on Mainnet
     *
     */
    address constant SEND_CORE_TEAM_SAFE = 0xE52D0967A2eE242098d11c209f53C8158E329eCC;
    /**
     * [Send: Contributor Incentives](https://etherscan.io/address/0x4F30818f5c1a20803AB2075B813DBDE810e51b98)
     * @notice Only on Mainnet
     *
     */
    address constant SEND_CONTRIBUTOR_INCENTIVES_SAFE = 0x4F30818f5c1a20803AB2075B813DBDE810e51b98;
    /**
     * [Send: Multisig Signer Payouts](https://etherscan.io/address/0x5355c409fa3D0901292231Ddb953C949C2211D96)
     * @notice Only on Mainnet
     *
     */
    address constant SEND_MULTISIG_SIGNER_PAYOUTS_SAFE = 0x5355c409fa3D0901292231Ddb953C949C2211D96;

    /**
     * Send Merkle Drop for Send token distributions on mainnet.
     * @notice Not deployed yet.
     */
    address constant SEND_MERKLE_DROP = 0xB9310daE45E71c7a160A13D64204623071a8E347;

    function labels() public {
        vm.label(SEND_TOKEN, "SEND_TOKEN");
        vm.label(SEND_DEPLOYER, "SEND_DEPLOYER");
        vm.label(SEND_EX_LISTINGS_SAFE, "SEND_EX_LISTINGS_SAFE");
        vm.label(SEND_TREASURY_SAFE, "SEND_TREASURY_SAFE");
        vm.label(SEND_AIRDROPS_SAFE, "SEND_AIRDROPS_SAFE");
        vm.label(SEND_CORE_TEAM_SAFE, "SEND_CORE_TEAM_SAFE");
        vm.label(SEND_CONTRIBUTOR_INCENTIVES_SAFE, "SEND_CONTRIBUTOR_INCENTIVES_SAFE");
        vm.label(SEND_MULTISIG_SIGNER_PAYOUTS_SAFE, "SEND_MULTISIG_SIGNER_PAYOUTS_SAFE");
        vm.label(SEND_MERKLE_DROP, "SEND_MERKLE_DROP");
    }
}
