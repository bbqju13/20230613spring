package com.myweb.www.domain;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@ToString
@AllArgsConstructor
@Setter
@Getter
public class BoardDTO {
	
	private BoardVO bvo;
	private List<FileVO> Flist;
	
	public BoardDTO() {}
	
	public BoardDTO(BoardVO bvo, List<FileVO> Flist) {
		this.bvo = bvo;
		this.Flist = Flist;
	}
	
	public BoardVO getBvo() {
		return bvo;
	}
	public void setBvo(BoardVO bvo) {
		this.bvo = bvo;
	}
	public List<FileVO> getFlist() {
		return Flist;
	}
	public void setFlist(List<FileVO> flist) {
		Flist = flist;
	}
	@Override
	public String toString() {
		return "BoardDTO [bvo=" + bvo + ", Flist=" + Flist + "]";
	}
	
}
