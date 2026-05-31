#!/usr/bin/env python3
"""Merge cover PDF and body PDF into final report, add metadata."""

from pypdf import PdfReader, PdfWriter, Transformation

A4_W, A4_H = 595.28, 841.89

def normalize_page_to_a4(page):
    box = page.mediabox
    w, h = float(box.width), float(box.height)
    if abs(w - A4_W) > 2 or abs(h - A4_H) > 2:
        sx, sy = A4_W / w, A4_H / h
        page.add_transformation(Transformation().scale(sx=sx, sy=sy))
        page.mediabox.lower_left = (0, 0)
        page.mediabox.upper_right = (A4_W, A4_H)
    return page

def merge_pdfs(cover_path, body_path, output_path):
    writer = PdfWriter()
    
    # Cover as page 1
    cover_page = PdfReader(cover_path).pages[0]
    writer.add_page(normalize_page_to_a4(cover_page))
    
    # Body pages follow
    for page in PdfReader(body_path).pages:
        writer.add_page(normalize_page_to_a4(page))
    
    # Add metadata
    writer.add_metadata({
        '/Title': 'UI/UX PRO MAX v8.0 - Comprehensive Upgrade Audit Report',
        '/Author': 'Z.ai',
        '/Creator': 'Z.ai',
        '/Subject': 'Comprehensive audit and upgrade report for UI/UX PRO MAX design system v8.0',
        '/Producer': 'Z.ai Report Engine',
    })
    
    with open(output_path, 'wb') as f:
        writer.write(f)
    print(f'Merged PDF: {output_path}')

if __name__ == '__main__':
    merge_pdfs(
        '/home/z/my-project/download/cover.pdf',
        '/home/z/my-project/download/report_body.pdf',
        '/home/z/my-project/download/UI-UX-PRO-MAX-v8-COMPREHENSIVE-UPGRADE-REPORT.pdf'
    )
