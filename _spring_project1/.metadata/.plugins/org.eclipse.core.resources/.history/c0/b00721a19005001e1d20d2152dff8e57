package com.myweb.www.domain;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class BoardVO {
	/*bno int not null auto_increment primary key,
title varchar(255),
content text,
writer varchar(255),
reg_date datetime default now(),
read_count int,
isdel varchar(255) default 'n'
	 * */
	private int bno;
	private String title;
	private String content;
	private String writer;
	private String reg_date;
	private int read_count;
	private String isdel;
	
public BoardVO() {}

public int getBno() {
	return bno;
}

public void setBno(int bno) {
	this.bno = bno;
}

public String getTitle() {
	return title;
}

public void setTitle(String title) {
	this.title = title;
}

public String getContent() {
	return content;
}

public void setContent(String content) {
	this.content = content;
}

public String getWriter() {
	return writer;
}

public void setWriter(String writer) {
	this.writer = writer;
}

public String getReg_date() {
	return reg_date;
}

public void setReg_date(String reg_date) {
	this.reg_date = reg_date;
}

public int getRead_count() {
	return read_count;
}

public void setRead_count(int read_count) {
	this.read_count = read_count;
}

public String getIsdel() {
	return isdel;
}

public void setIsdel(String isdel) {
	this.isdel = isdel;
}

@Override
public String toString() {
	return "BoardVO [bno=" + bno + ", title=" + title + ", content=" + content + ", writer=" + writer + ", reg_date="
			+ reg_date + ", read_count=" + read_count + ", isdel=" + isdel + "]";
}

	
}
