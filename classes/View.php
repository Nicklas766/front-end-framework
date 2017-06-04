<?php
class View
{
    /**
     * Constructor
     * @param $dsn string The dsn to the database-file
     * @return void
     */
    public function __construct()
    {

    }

    public function setPage($pages)
    {
      // Make an array of the comma separated string $page
      if (!is_array($pages)) {
          $pages = strtolower($pages);
          $pages = preg_replace('/\s/', '', explode(',', $pages));
      }

      // Include all views. But set $pages in middle
      include "views/header.php";
      include "views/site-header.php";

      foreach ($pages as $value) {
          include "views/$value.php";
      }

      include "views/footer.php";
    }
}
