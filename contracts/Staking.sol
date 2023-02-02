// SPDX-License-Identifier: MIT
pragma solidity >=0.6.5 <0.8.0;
pragma experimental ABIEncoderV2;

import '@openzeppelin/contracts/math/SafeMath.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';
import '@openzeppelin/contracts/math/SafeMath.sol';
import '@openzeppelin/contracts/utils/ReentrancyGuard.sol';
import '@openzeppelin/contracts/token/ERC20/SafeERC20.sol';

// {erc20 address:{
// owner address: amount
//}}

contract Stakeing is ReentrancyGuard {
	mapping(address => mapping(address => uint256)) ERC20Vaults;

	event Dposited(address, address, uint256);

	using SafeMath for uint256;
	using SafeERC20 for IERC20;

	function deposit(address ERC20Address, uint256 Amount) external nonReentrant {
		address sender = msg.sender;
		ERC20Vaults[ERC20Address][sender] = ERC20Vaults[ERC20Address][sender].add(Amount);
		IERC20(ERC20Address).safeTransferFrom(sender, address(this), Amount);
		emit Dposited(ERC20Address, sender, Amount);
	}

	function withdraw(address ERC20Address, uint256 Amount) external nonReentrant {}
}

contract newStakeing is ReentrancyGuard {
	mapping(bytes32 => uint256) Vault;

	event Dposited(address, address, uint256);

	using SafeMath for uint256;
	using SafeERC20 for IERC20;

	function deposit(address ERC20Address, uint256 Amount) external nonReentrant {
		address sender = msg.sender;
		bytes32 hash = keccak256(abi.encodePacked(ERC20Address, sender));
		uint256 _balance = Vault[hash];
		Vault[hash] = _balance.add(Amount);
		IERC20(ERC20Address).safeTransferFrom(sender, address(this), Amount);
		emit Dposited(ERC20Address, sender, Amount);
	}
}
