package com.myweb.www.domain;

public class PagingVO {
	private int pageNo; // 현재 화면에 출력된 페이지네이션 번호
	private int qty; // 한 페이지에 보여지는 게시글 수 (10개)
	private String type;
	private String keyword;
	
	public PagingVO() {
		this(1, 10);
	}
	public PagingVO(int pageNo, int qty) {
		this.pageNo = pageNo;
		this.qty = qty;
	}
	public int getPageStart() { // DB상 limit의 시작값을 구하는 메서드
		// limit의 시작값은 '0' 부터 10개 (limit 0, 10)
		return (this.pageNo-1)*qty;
	}
	public int getPageNo() {
		return pageNo;
	}
	public void setPageNo(int pageNo) {
		this.pageNo = pageNo;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getKeyword() {
		return keyword;
	}
	public void setKeyword(String keyword) {
		this.keyword = keyword;
	}
	@Override
	public String toString() {
		return "PagingVO [pageNo=" + pageNo + ", qty=" + qty + ", type=" + type + ", keyword=" + keyword + "]";
	}
	
	// 여러가지 타입을 같이 검색하기 위해서 타입을 배열로 구분
	public String[] getTypeToArray() {
		return this.type == null ? new String[] {} : this.type.split("");
	}
	
}
