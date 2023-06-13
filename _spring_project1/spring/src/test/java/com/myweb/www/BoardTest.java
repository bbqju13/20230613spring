package com.myweb.www;

import javax.inject.Inject;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.myweb.www.domain.BoardVO;
import com.myweb.www.repository.BoardDAO;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class BoardTest {
	public static final Logger log = LoggerFactory.getLogger(BoardTest.class);
	
	@Inject
	private BoardDAO bdao;
	
	@Test
	public void insertBoard() {
		log.info(" >>>>> Test insert in >>>>>");
		for(int i=0; i<300; i++) {
			BoardVO bvo = new BoardVO();
			bvo.setTitle("Test Title : " + i);
			bvo.setContent("Test Content : " + i);
			bvo.setWriter("Tester");
			
			bdao.insert(bvo);
			
		}
		
	}
	
	
}
