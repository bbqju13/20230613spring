package com.myweb.www.repository;

import java.util.List;

import com.myweb.www.domain.BoardVO;
import com.myweb.www.domain.PagingVO;

public interface BoardDAO {

	List<BoardVO> getList();

	int insert(BoardVO bvo);

	BoardVO getDetail(int bno);

	int readCount(int bno);

	int delete(int bno);

	int updateBoard(BoardVO bvo);

	List<BoardVO> selectBoardListPaging(PagingVO pvo);

	int getTotalCnt(PagingVO pvo);

	List<BoardVO> searchList(String keyword);

	int selectBno();


}
