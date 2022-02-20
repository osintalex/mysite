import React from "react";
import { render, screen, waitFor, act } from "@testing-library/react";
import Blog from "./blog.js";

describe("Blog", () => {
  let originalFetch;
  beforeEach(() => {
    originalFetch = global.fetch;
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            status: "ok",
            feed: {
              url: "https://medium.com/feed/@alexanderdarby",
              title: "Stories by osintalex on Medium",
              link: "https://medium.com/@alexanderdarby?source=rss-432b94d3ea3a------2",
              author: "",
              description: "Stories by osintalex on Medium",
              image:
                "https://cdn-images-1.medium.com/fit/c/150/150/1*9F4dcyUxHm8jgt1q1aIhVg.jpeg",
            },
            items: [
              {
                title: "Go Full Stack with Django and React in 15m",
                pubDate: "2021-11-25 10:02:52",
                link: "https://medium.com/geekculture/go-full-stack-with-django-and-react-in-15m-ef73b6dba28b?source=rss-432b94d3ea3a------2",
                guid: "https://medium.com/p/ef73b6dba28b",
                author: "osintalex",
                thumbnail:
                  "https://cdn-images-1.medium.com/max/960/1*6suJM99zakMVgycNAtCA1Q.gif",
                description:
                  '<div class="medium-feed-item">\n<p class="medium-feed-image"><a href="https://medium.com/geekculture/go-full-stack-with-django-and-react-in-15m-ef73b6dba28b?source=rss-432b94d3ea3a------2"><img src="https://cdn-images-1.medium.com/max/960/1*6suJM99zakMVgycNAtCA1Q.gif" width="960"></a></p>\n<p class="medium-feed-snippet">Short and simple guide to setting up a Django and React project with Docker</p>\n<p class="medium-feed-link"><a href="https://medium.com/geekculture/go-full-stack-with-django-and-react-in-15m-ef73b6dba28b?source=rss-432b94d3ea3a------2">Continue reading on Geek Culture »</a></p>\n</div>',
                content:
                  '<div class="medium-feed-item">\n<p class="medium-feed-image"><a href="https://medium.com/geekculture/go-full-stack-with-django-and-react-in-15m-ef73b6dba28b?source=rss-432b94d3ea3a------2"><img src="https://cdn-images-1.medium.com/max/960/1*6suJM99zakMVgycNAtCA1Q.gif" width="960"></a></p>\n<p class="medium-feed-snippet">Short and simple guide to setting up a Django and React project with Docker</p>\n<p class="medium-feed-link"><a href="https://medium.com/geekculture/go-full-stack-with-django-and-react-in-15m-ef73b6dba28b?source=rss-432b94d3ea3a------2">Continue reading on Geek Culture »</a></p>\n</div>',
                enclosure: {},
                categories: [
                  "react",
                  "programming",
                  "javascript",
                  "full-stack",
                  "python",
                ],
              },
              {
                title: "How to Add Medium Posts to Your Site in 15 minutes",
                pubDate: "2021-11-17 16:24:00",
                link: "https://javascript.plainenglish.io/how-to-add-medium-posts-to-your-site-in-15-minutes-7880e75d16e0?source=rss-432b94d3ea3a------2",
                guid: "https://medium.com/p/7880e75d16e0",
                author: "osintalex",
                thumbnail:
                  "https://cdn-images-1.medium.com/max/600/1*dMTHIAFuvlOFBdNbWX946Q.gif",
                description:
                  '<div class="medium-feed-item">\n<p class="medium-feed-image"><a href="https://javascript.plainenglish.io/how-to-add-medium-posts-to-your-site-in-15-minutes-7880e75d16e0?source=rss-432b94d3ea3a------2"><img src="https://cdn-images-1.medium.com/max/600/1*dMTHIAFuvlOFBdNbWX946Q.gif" width="600"></a></p>\n<p class="medium-feed-snippet">JavaScript/React solution to embed medium blog posts into your site</p>\n<p class="medium-feed-link"><a href="https://javascript.plainenglish.io/how-to-add-medium-posts-to-your-site-in-15-minutes-7880e75d16e0?source=rss-432b94d3ea3a------2">Continue reading on JavaScript in Plain English »</a></p>\n</div>',
                content:
                  '<div class="medium-feed-item">\n<p class="medium-feed-image"><a href="https://javascript.plainenglish.io/how-to-add-medium-posts-to-your-site-in-15-minutes-7880e75d16e0?source=rss-432b94d3ea3a------2"><img src="https://cdn-images-1.medium.com/max/600/1*dMTHIAFuvlOFBdNbWX946Q.gif" width="600"></a></p>\n<p class="medium-feed-snippet">JavaScript/React solution to embed medium blog posts into your site</p>\n<p class="medium-feed-link"><a href="https://javascript.plainenglish.io/how-to-add-medium-posts-to-your-site-in-15-minutes-7880e75d16e0?source=rss-432b94d3ea3a------2">Continue reading on JavaScript in Plain English »</a></p>\n</div>',
                enclosure: {},
                categories: [
                  "web-development",
                  "react",
                  "programming",
                  "javascript",
                  "coding",
                ],
              },
            ],
          }),
      })
    );
  });

  afterEach(() => {
    global.fetch = originalFetch;
  });
  test("renders loading correctly", async () => {
    render(<Blog />);
    act(() => expect(screen.getByRole("loading")).toBeInTheDocument());
    /* This removes a code not wrapped in act warning triggered by other
     * state events, namely setMedium and setLoading
     */
    await waitFor(() => screen.findByRole(/loading/));
  });
  test("renders all Blog material", async () => {
    render(<Blog />);
    await waitFor(() => {
      expect(screen.getAllByLabelText("blog posts container").length).toBe(2);
    });
  });
});
