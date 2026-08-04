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

        instagram = modal.get_by_role("link", name="Instagram")
        facebook = modal.get_by_role("link", name="Facebook")
        assert instagram.get_attribute("href") == "https://www.instagram.com/finchautoparts/"
        assert facebook.get_attribute("href") == "https://www.facebook.com/finchautoparts/"


def test_website_link_is_last():
    with browser_page() as page:
        page.goto("/")
        page.get_by_role("button", name="South Ring Autos", exact=False).click()

        modal = page.get_by_role("dialog")
        links = modal.get_by_role("link").all()
        assert [link.get_attribute("aria-label") for link in links] == [
            "Instagram",
            "Facebook",
            "Twitter",
            "Website",
        ]
        assert links[-1].get_attribute("href") == "https://www.southringautos.com/"
        assert links[-1].inner_text() == "Website"


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
    test_website_link_is_last,
    test_partner_without_info_opens_empty_modal,
    test_partner_modal_closes_on_escape,
]

if __name__ == "__main__":
    for t in TESTS:
        t()
        print(f"PASS {t.__name__}")
