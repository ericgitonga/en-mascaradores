"""Golden path: the page loads and every section renders."""

import re

from _common import browser_page

SECTION_HEADINGS = {
    "services": "Our services",
    "partners": "Our partners",
    "hours": "Working hours",
    "team": "Meet the team",
    "contact": "Get in touch",
}


def test_index_loads():
    with browser_page() as page:
        resp = page.goto("/")
        assert resp.status == 200
        assert page.title() == "En Mascaradores — Car, Plumbing & Electrical Repairs"
        assert page.locator('meta[name="description"]').get_attribute("content")

        heading = page.locator("h1")
        assert heading.is_visible()
        assert "Skip the garage" in heading.inner_text()


def test_all_sections_render():
    with browser_page() as page:
        page.goto("/")
        for section_id, heading_text in SECTION_HEADINGS.items():
            section = page.locator(f"#{section_id}")
            assert section.is_visible(), f"#{section_id} not visible"
            assert section.get_by_role("heading", name=heading_text).is_visible()


def test_working_days_listed():
    with browser_page() as page:
        page.goto("/")
        hours = page.locator("#hours")
        for day in ["Tuesday", "Wednesday", "Thursday"]:
            assert hours.get_by_text(day, exact=True).is_visible()


def test_footer_copyright():
    with browser_page() as page:
        page.goto("/")
        footer_text = page.get_by_role("contentinfo").inner_text()
        assert re.search(r"©\s*\d{4}\s+En Mascaradores\.", footer_text)


TESTS = [
    test_index_loads,
    test_all_sections_render,
    test_working_days_listed,
    test_footer_copyright,
]

if __name__ == "__main__":
    for t in TESTS:
        t()
        print(f"PASS {t.__name__}")
