// SPDX-License-Identifier: MIT
pragma solidity >=0.6.5 <0.8.0;
pragma experimental ABIEncoderV2;

import '@openzeppelin/contracts/access/Ownable.sol';
import './libs/Base64.sol';

contract MetaData is Ownable {
	function tokenURI(uint256 id) external pure returns (string memory) {
		string memory json = Base64.encode(abi.encodePacked('hello, the beginning', id));
		return string(abi.encodePacked('data:application/json;base64,', json));
	}
}
