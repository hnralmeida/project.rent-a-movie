package com.example.backend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.backend.Models.Title;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TitleRepository extends JpaRepository<Title, Long> {
     @Query(value = "SELECT TITLE.ID, TITLE.TITLE_NAME, TITLE.CATEGORY, TITLE.DIRECTOR_ID, TITLE.SYNOPSIS, TITLE.TYPE_ID FROM TITLE, DIRECTOR, TYPE WHERE TITLE.TITLE_NAME LIKE %?1% AND DIRECTOR.ID = TITLE.DIRECTOR_ID AND TYPE.ID = TITLE.TYPE_ID", nativeQuery = true)
    List<Title> getListTitlesByName(String titleName);

     @Query(value = "SELECT TITLE.ID, TITLE.TITLE_NAME, TITLE.CATEGORY, TITLE.DIRECTOR_ID, TITLE.SYNOPSIS, TITLE.TYPE_ID FROM TITLE, DIRECTOR, TYPE WHERE DIRECTOR.DIRECTOR_NAME LIKE %?1% AND DIRECTOR.ID = TITLE.DIRECTOR_ID AND TYPE.ID = TITLE.TYPE_ID", nativeQuery = true)
     List<Title> getListTitlesByDirector(String directorName);

    @Query(value = "SELECT TITLE.ID, TITLE.TITLE_NAME, TITLE.CATEGORY, TITLE.DIRECTOR_ID, TITLE.SYNOPSIS, TITLE.TYPE_ID FROM TITLE, DIRECTOR, TYPE WHERE TITLE.CATEGORY LIKE %?1% AND DIRECTOR.ID = TITLE.DIRECTOR_ID AND TYPE.ID = TITLE.TYPE_ID", nativeQuery = true)
    List<Title> getListTitlesByCategory(String category);
}
