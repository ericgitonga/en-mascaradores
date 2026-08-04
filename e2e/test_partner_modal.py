"""Partner logos/names open a detail modal; partners with no info get an empty one."""

from _common import browser_page


def test_partners_intro_paragraph():
    with browser_page() as page:
        page.goto("/")
        partners = page.locator("#partners")
        assert "trusted partners we also work with" in partners.inner_text()


def test_partner_with_info_opens_modal_with_description_and_links():
    with browser_page() as page:
        page.goto("/")
        page.get_by_role("button", name="Finch Auto", exact=False).click()

        modal = page.get_by_role("dialog")
        assert modal.is_visible()
        assert "German Machines" in modal.inner_text()

        links = modal.get_by_role("link").all()
        assert [link.inner_text() for link in links] == ["Instagram", "Facebook"]
        assert links[0].get_attribute("href") == "https://www.instagram.com/finchautoparts/"
        assert links[1].get_attribute("href") == "https://www.facebook.com/finchautoparts/"


def test_partner_without_info_opens_empty_modal():
    with browser_page() as page:
        page.goto("/")
        page.get_by_role("button", name="Asendi Spares", exact=False).click()

        modal = page.get_by_role("dialog")
        assert modal.is_visible()
        assert modal.get_by_role("link").count() == 0


def test_partner_modal_closes_on_escape():
    with browser_page() as page:
        page.goto("/")
        page.get_by_role("button", name="GariScan", exact=False).click()
        assert page.get_by_role("dialog").is_visible()

        page.keyboard.press("Escape")
        assert page.get_by_role("dialog").count() == 0


TESTS = [
    test_partners_intro_paragraph,
    test_partner_with_info_opens_modal_with_description_and_links,
    test_partner_without_info_opens_empty_modal,
    test_partner_modal_closes_on_escape,
]

if __name__ == "__main__":
    for t in TESTS:
        t()
        print(f"PASS {t.__name__}")
