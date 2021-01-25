package com.interview.ike.demo.controllers

import com.interview.ike.demo.models.ColumbusUndergroundEntry
import com.interview.ike.demo.models.ColumbusUndergroundEntryRepository
import com.interview.ike.demo.rss.FeedReader
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.ResponseBody
import org.springframework.web.bind.annotation.RestController

@RestController
class FeedController {
    @Autowired
    ColumbusUndergroundEntryRepository repository

    @GetMapping(value = '/api/feed')
    @ResponseBody
    List<ColumbusUndergroundEntry> getFeed() {
        repository.findAll()
    }
}
