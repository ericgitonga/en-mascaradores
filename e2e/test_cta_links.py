"""Every call-to-action must actually point at the contact section / email."""

from _common import CONTACT_EMAIL, browser_page


def test_cta_buttons_link_to_contact():
    with browser_page() as page:
        page.goto("/")
        assert page.get_by_role("link", name="Get in touch").get_attribute("href") == "#contact"
        assert page.get_by_role("link", name="Book a job").get_attribute("href") == "#contact"


def test_contact_email_link():
    with browser_page() as page:
        page.goto("/")
        mailto = page.get_by_role("link", name=CONTACT_EMAIL)
        assert mailto.get_attribute("href") == f"mailto:{CONTACT_EMAIL}"


TESTS = [test_cta_buttons_link_to_contact, test_contact_email_link]

if __name__ == "__main__":
    for t in TESTS:
        t()
        print(f"PASS {t.__name__}")
