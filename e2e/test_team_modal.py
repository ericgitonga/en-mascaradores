"""Team cards, reached via the "Who we are" nav link, open a detail modal,
which closes via X, backdrop, or Esc."""

from _common import browser_page


def _open_herb_detail(page):
    page.goto("/")
    page.get_by_role("button", name="Who we are").click()
    page.get_by_role("dialog").get_by_role("button", name="Herb", exact=False).click()


def test_team_card_opens_modal_with_details():
    with browser_page() as page:
        _open_herb_detail(page)

        modal = page.get_by_role("dialog")
        assert modal.is_visible()
        assert "Code Name:" in modal.inner_text()
        assert "Herb" in modal.inner_text()
        assert "Education:" in modal.inner_text()
        assert "White Collar Career:" in modal.inner_text()


def test_modal_omits_blank_categories():
    with browser_page() as page:
        _open_herb_detail(page)

        modal = page.get_by_role("dialog")
        assert "Defining Quote:" not in modal.inner_text()


def test_modal_closes_on_close_button():
    with browser_page() as page:
        _open_herb_detail(page)
        assert page.get_by_role("dialog").is_visible()

        page.get_by_role("button", name="Close").click()
        assert page.get_by_role("dialog").count() == 0


def test_modal_closes_on_backdrop_click():
    with browser_page() as page:
        _open_herb_detail(page)
        assert page.get_by_role("dialog").is_visible()

        page.mouse.click(5, 5)
        assert page.get_by_role("dialog").count() == 0


def test_modal_closes_on_escape():
    with browser_page() as page:
        _open_herb_detail(page)
        assert page.get_by_role("dialog").is_visible()

        page.keyboard.press("Escape")
        assert page.get_by_role("dialog").count() == 0


TESTS = [
    test_team_card_opens_modal_with_details,
    test_modal_omits_blank_categories,
    test_modal_closes_on_close_button,
    test_modal_closes_on_backdrop_click,
    test_modal_closes_on_escape,
]

if __name__ == "__main__":
    for t in TESTS:
        t()
        print(f"PASS {t.__name__}")
