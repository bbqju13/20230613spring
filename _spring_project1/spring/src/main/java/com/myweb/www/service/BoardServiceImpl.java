package com.myweb.www.service;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.myweb.www.domain.BoardVO;
import com.myweb.www.domain.PagingVO;
import com.myweb.www.domain.UserVO;
import com.myweb.www.repository.BoardDAO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class BoardServiceImpl implements BoardService {
	private static final Logger log = LoggerFactory.getLogger(BoardServiceImpl.class);
	
	@Inject
	private BoardDAO bdao;

	@Override
	public int register(BoardVO bvo) {
		// TODO Auto-generated method stub
		log.info(" >>>>> board register in >>>>> ");
		return bdao.insert(bvo);
	}

	

	@Override
	public List<BoardVO> getList() {
		// TODO Auto-generated method stub
		log.info(" >>>>> board list in >>>>> ");
		return bdao.getList();
	}



	@Override
	public BoardVO getDetail(int bno) {
		// TODO Auto-generated method stub
		log.info(" >>>>> board detail in >>>>> ");
		return bdao.getDetail(bno);
	}



	@Override
	public int readCount(int bno) {
		// TODO Auto-generated method stub
		log.info(" >>>>> board readCount in >>>>> ");
		return bdao.readCount(bno);
	}

	@Override
	public int modify(BoardVO bvo, UserVO user) {
		// TODO Auto-generated method stub
		log.info(" >>>>> board modify in >>>>> ");
		BoardVO tmpBoard = bdao.getDetail(bvo.getBno()); // 해당 글의 게시글 호출
		if(user == null || !user.getId().equals(tmpBoard.getWriter())) {
			
			return 0;
		}
		return bdao.updateBoard(bvo);
	}
	
	@Override
	public int delete(int bno) {
		// TODO Auto-generated method stub
		log.info(" >>>>> board delete in >>>>> ");
		return bdao.delete(bno);
	}



	@Override
	public List<BoardVO> getList(PagingVO pvo) {
		// TODO Auto-generated method stub
		log.info(" >>>>> board PagingList in >>>>> ");
		return bdao.selectBoardListPaging(pvo);
	}



	@Override
	public int gettotalCnt(PagingVO pvo) {
		// TODO Auto-generated method stub
		log.info(" >>>>> board PagingList in >>>>> ");
		return bdao.getTotalCnt(pvo);
	}



	@Override
	public List<BoardVO> search(String keyword) {
		// TODO Auto-generated method stub
		log.info(" >>>>> board searchList in >>>>> ");
		return bdao.searchList(keyword);
	}



}