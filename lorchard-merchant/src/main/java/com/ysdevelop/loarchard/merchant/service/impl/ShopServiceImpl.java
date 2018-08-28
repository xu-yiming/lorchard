package com.ysdevelop.loarchard.merchant.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ysdevelop.loarchard.merchant.entity.Shop;
import com.ysdevelop.loarchard.merchant.mapper.ShopDao;
import com.ysdevelop.loarchard.merchant.service.ShopService;
import com.ysdevelop.lochard.common.exception.WebServiceException;
import com.ysdevelop.lochard.common.result.CodeMsg;
import com.ysdevelop.lochard.common.utils.Constant;
import com.ysdevelop.lorchard.shiro.entity.BaseAuth;
import com.ysdevelop.lorchard.shiro.service.UserService;
import com.ysdevelop.lorchard.shiro.token.TokenManager;

@Service
public class ShopServiceImpl implements ShopService {

	@Autowired
	private ShopDao shopDao;

	@Autowired
	private UserService userService;

	@Transactional(rollbackFor = Exception.class)
	@Override
	public void applyShop(Shop shop) {
		if (shop == null) {
			throw new WebServiceException(CodeMsg.SERVER_ERROR);
		}
		Integer changCount = shopDao.addShop(shop);
		if (changCount == Constant.DEFALULT_ZERO) {
			throw new WebServiceException(CodeMsg.SERVER_ERROR);
		}
		BaseAuth baseAuth = TokenManager.getToken();
		//System.out.println("userId-->" + baseAuth.getId());

	}

}