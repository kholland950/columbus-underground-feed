package com.interview.ike.demo.models

import javax.persistence.Column
import javax.persistence.ElementCollection
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.Lob

@Entity
class ColumbusUndergroundEntry {
    @Id
    String id
    String title

    @Lob
    @Column(name='description')
    String description

    String uri
    String date

    @ElementCollection
    List<String> categories

    ColumbusUndergroundEntry() {
        this.id = UUID.randomUUID().toString()
    }
}
