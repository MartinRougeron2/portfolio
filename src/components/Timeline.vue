<template>
  <div class="q-ma-lg">
    <q-timeline color="secondary" class="q-pa-lg" >
      <q-timeline-entry heading   class="flex flex-center major-date">
        TODAY
      </q-timeline-entry>

      <q-timeline-entry
          title="Dashboard"
          subtitle="December 12, 2021"
          icon="dashboard"
      >
        <div class="date-text">
          First Web Project at EPITECH, it was a good experience with my friend. It involved UI / UX, DataBase, Security and API knowledege.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
          title="Redditech"
          subtitle="November 1, 2021"
          icon="aod"
      >
        <div class="date-text">
          First Mobile Project, a difficult project but I learned to do something new. Flutter is one of the most wanted language in 2021 so it's also an investment.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
          title="Babel"
          subtitle="25 september, 2021"
          icon="phone_in_talk"
      >
        <div class="date-text">
          To celebrate my 3rd year at EPITECH, I choose to take the Babel project.
          The goal was simple: create a voIP app with a graphic interface.
          It was the most difficult project of my years at EPITECH.
          Create 2 servers, with 2 protocols while learning to use a package manager was a lot in one month. 
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading   class="flex flex-center major-date">
        3rd year : September, 2021
      </q-timeline-entry>

      <q-timeline-entry
          title="Freelance for 2c2l"
          subtitle="June 15, 2021"
          icon="leaderboard"
          color="orange"
      >
        <div class="date-text">
          I worked 1 month for 2c2l, I help optimize the database requests, fix some UI issues and help to train the intern on the project.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
          title="Indie Studio"
          subtitle="May 4th, 2021"
          icon="videogame_asset"
      >
        <div class="date-text">
          We create a bomberman game with a multiplayer part. Unfortunaly, we didn't have enough time to finish it, so the graphic part is sloppy.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
          title="C++ pool"
          subtitle="January 22, 2021"
          icon="code"
      >
        <div class="date-text">
          The C++ Seminar (or Pool) is a key moment in Epitech training. It's intensive and highly instructive. <br />
          I discover object-oriented programming through the fundamental elements of the C++ language. <br/>
          Classes, instances and methods.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
          title="Intership at 2c2l"
          subtitle="July 1, 2020"
          icon="people"
          color="orange"
      >
        <div class="date-text">
          The mission of the internship was to develop a web application dedicated to online booking as a full-stack web developer in Python / Django / QuasarJs.
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading   class="flex flex-center major-date">
        2nd year : July, 2020
      </q-timeline-entry>

      <q-timeline-entry
          title="My RPG"
          subtitle="May 15th, 2020"
          icon="sports_esports"
      >
        <div class="date-text">
          My first big project at EPITECH, in C.
          It's a rpg game were you're a soldier in a fantasy world. Your goal: kill the 2 bosses.
        </div>
      </q-timeline-entry>
      <q-timeline-entry
          title="C pool"
          subtitle="September 1st, 2019"
          icon="code"
      >
        <div class="date-text">
          The C Pool is the foundation of the Epitech curriculum. <br />

            ON THE AGENDA: UNIX shell, C language, school life <br />

            - Basics of UNIX system utilization, fundamental elements of C language, Makefiles and a few data structures. <br /> 

            - Also, in order to avoid losing our rhythm over the weekend: <br />
              * Rush: a type of mini-project to be completed in small groups
        </div>
      </q-timeline-entry>

      <q-timeline-entry heading   class="flex flex-center major-date">
        1st year : September, 2019
      </q-timeline-entry>
    </q-timeline>
  </div>
</template>

<script>
export default {
  name: "timeline"
}
</script>

<style scoped>
.major-date {
  color: darkblue
}

.date-text {
  text-align: justify;
}
</style>