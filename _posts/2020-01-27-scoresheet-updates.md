---
layout: post
title: Scoresheet Updates 
---

Thank you all for attending our 6th MIT Science Olympiad Invitational this past Saturday. Your fantastic teams are why we choose to run the tournament year after year. We have important information to convey to you all regarding the scoring of the tournament. Since the awards ceremony on Saturday, a few scoring issues were brought to our attention. Over the past few days, we've worked very hard to make sure we were as thorough as possible in ascertaining the situation and wanted to provide you all with an update as soon as possible. This post details the update.

During our post-tournament wrap-up, a few errors in the final scoring were discovered. First, two teams had their scores swapped accidentally during grade entry into our scoring system for gravity vehicle. This has since been fixed, and neither medal placements nor trophy placements were impacted. Second, we encountered a major issue with the Excel scoresheet distributed online by the National Science Olympiad website (found [here](https://www.soinc.org/scoresheets)) for Sounds of Music. It was brought to our attention by our Sounds of Music Event Supervisor after the tournament who noticed that the teams with more pitch score error appear to be scoring higher than those with less. After additional investigation, it was found that the formula being used to calculate the pitch score was incorrect if the DATAMODE used on the spreadsheet was CENTS. Because this has potentially impacted several of the tournaments that have already happened, we have included more information below so that tournaments may check if this error occurred in their scoring.

We have since contacted National Science Olympiad about the error of its scoresheet on the [soinc.org](https://soinc.org) website, and National Science Olympiad has since rectified the error and uploaded a corrected spreadsheet (version 0.5).

## Resolution
All corrected scores for Sounds of Music have been entered into Avogadro. This changes the medal placements of Sounds of Music. 
* If your team now receives a higher-placing medal than before (for instance, the new scores indicate you are 2nd place, but you originally received a 6th place medal), we will be in contact with your team and mail your team the new (higher-placing) medals. You will not need to send your old (lower-placing) medals to us.
* If your team now receives a lower-placing medal than before, we will be in contact with your team, but you **will not need to take any action** (please keep your higher-placing medal).

These score changes also affect the overall team rankings. 
* If your team now receives a higher-placing trophy than before, we will be in contact with your team, and we will mail your team the new (higher-placing) trophy. You will not need to send your old (lower-placing) trophy to us.
* As with the medals, if your team now receives a lower-placing trophy than before, we will be in contact with your team, but you **will not need to take any action** (please keep your higher-placing trophy).

## Details About the Error
The scoring issue occurs when using version 0.4 of the score sheet. The fix has since been applied to version 0.5 which is the current online version as of this post. It also appears that v0.5 unhides the originally hidden columns, so event supervisors should use care to avoid modifying anything in that range.

## Reproducing the Error
By following the steps below, we will show that a team that should receive a zero on the Pitch Score (PS) will in fact receive a perfect PS.
1. Download version 0.4 of the Sounds of Music [grading scoresheet](https://www.soinc.org/sites/default/files/uploaded_files/Sounds_of_Music_Scoring_Sheet_2020v0.4.xlsx)
1. Set the TOURNAMENT LEVEL to NATIONAL and the DATA MODE to CENTS.
1. Enter a team name in Column B (any text is fine)
1. Enter -200 into each column of the Pitch Testing field for P1 Cents through P8 Cents. Use any Start Note.
1. In Column AH and Column AI, notice that the IPS Sum and PS column display a perfect score.

## Error Mechanism
This mistake is due to an error in the Excel formula used for calculating the Absolute Cents Error in hidden columns BG through BN. If CENTS is selected as the DATA MODE, the formula directly uses the value entered by the Event Supervisor (located columns M through T). According to rule 5.b.iii.1, the correct calculation is to take the absolute value of the error from the target frequency. The formula appears to take the absolute value when FREQUENCY is selected as the DATA MODE, so this error manifests only when cents are used as the unit instead of frequency.

If a team scores below -3, the spreadsheet tests if the Cents value is less than or equal to 3 (as per 5.b.iii.3.c). With the negative value, this conditional evaluates to true and gives the team a full IPS score. This also guarantees a perfect PS. The correct result should display and IPS score of 0.

