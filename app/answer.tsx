"use server";
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export async function answer(formData: FormData) {
    const query = formData.get("content")
    if (typeof query != 'string') {
        return "";
    }
    const url = query;
    try {
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const title = $("title").text().split("|");
    return title[0] || "";
    } catch (error) {
    console.error("Failed to fetch page:", error);
    return "";
    }
  }