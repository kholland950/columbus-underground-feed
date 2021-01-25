package com.interview.ike.demo.models

import org.springframework.data.repository.CrudRepository

import javax.transaction.Transactional

interface ColumbusUndergroundEntryRepository extends CrudRepository<ColumbusUndergroundEntry, String> {
    @Transactional
    Optional<ColumbusUndergroundEntry> findById(String id)

    @Transactional
    List<ColumbusUndergroundEntry> findAll()
}
