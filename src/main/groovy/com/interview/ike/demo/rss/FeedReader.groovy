package com.interview.ike.demo.rss

import com.interview.ike.demo.models.ColumbusUndergroundEntry
import com.interview.ike.demo.models.ColumbusUndergroundEntryRepository
import com.sun.syndication.feed.atom.Entry
import com.sun.syndication.feed.rss.Category
import com.sun.syndication.feed.synd.SyndCategoryImpl
import com.sun.syndication.feed.synd.SyndEntryImpl
import com.sun.syndication.feed.synd.SyndFeed
import com.sun.syndication.io.SyndFeedInput
import com.sun.syndication.io.XmlReader
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.beans.factory.annotation.Value
import org.springframework.stereotype.Component

import javax.annotation.PostConstruct

@Component
class FeedReader {
    private SyndFeed feed

    @Value('${rssFeedUrl}')
    private String feedUrl

    @Autowired
    ColumbusUndergroundEntryRepository repository

    @PostConstruct
    void init() {
        initFeed(feedUrl)
    }

    /**
     * Initialize and store feed
     * @param url
     */
    private void initFeed(String url) {
        URL feedSource = new URL(url)
        SyndFeedInput input = new SyndFeedInput()
        feed = input.build(new XmlReader(feedSource))

        List<ColumbusUndergroundEntry> entries = feed.entries.collect { SyndEntryImpl entry ->
            println(entry)
            new ColumbusUndergroundEntry().with {
                it.title = entry.title
                it.description = entry.description.value
                it.uri = entry.uri
                it.date = entry.publishedDate
                it.categories = entry.categories.collect { SyndCategoryImpl cat -> cat.name }
                it
            }
        }
        repository.saveAll(entries)
    }
}
