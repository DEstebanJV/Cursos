<?php
    function setFormatDate($in_date) {
        $date = new DateTime($in_date);

        echo $date->format('H:i:s');
    }

    setFormatDate('04:10:36 PM');