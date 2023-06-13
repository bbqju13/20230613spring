package com.myweb.www.repository;

import com.myweb.www.domain.UserVO;

public interface UserDAO {

	UserVO getUser(String id);

	int insert(UserVO uvo);

}
