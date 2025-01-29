<?php
// Adatbázis kapcsolat beállítása
$servername = "localhost";  // Az adatbázis szerver neve
$username = "root";         // Alapértelmezett MySQL felhasználó
$password = "";             // Alapértelmezett jelszó (üres)
$dbname = "ConsoleX";       // Az adatbázis neve

// Kapcsolat létrehozása
$conn = new mysqli($servername, $username, $password, $dbname);

// Kapcsolat ellenőrzése
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Lekérdezés a termékekhez
$sql = "SELECT * FROM products";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>ConsoleX</title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&amp;display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="main.css">
</head>
<body>
  <header class="header">
    <img alt="Konzolvilág logo" src="https://placehold.co/150x50"/>
    <div class="search-bar">
      <input placeholder="Keresés" type="text"/>
      <button>
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="cart">
      <i class="fas fa-shopping-cart"></i>
      <span>Kosár</span>
    </div>
  </header>

  <nav class="nav">
    <a href="#">Akció</a>
    <a href="#">Használt</a>
    <a href="#">PlayStation</a>
    <a href="#">Xbox</a>
    <a href="#">PC</a>
    <a href="#">PlayStation</a>
  </nav>

  <main class="main">
    <aside class="sidebar">
      <h2>Szűrők</h2>
      <label><input type="checkbox"/> Új termékek</label>
      <label><input type="checkbox"/> Használt termékek</label>
      <label><input type="checkbox"/> Raktáron</label>
      <label><input type="checkbox"/> Előrendelhető</label>
    </aside>

    <section class="content">
      <img alt="PS5 Pro advertisement with the text 'WITNESS PLAY UNLEASHED' and a PS5 console image" src="https://placehold.co/800x200"/>
      <h1>Játékok</h1>
      <p>1–24 / 880 termék Játékok kategóriában</p>
      <div class="products">
        <?php
        // Ellenőrizzük, hogy van-e találat
        if ($result->num_rows > 0) {
          // Kimenet a termékekről
          while($row = $result->fetch_assoc()) {
            echo '<div class="product">';
            echo '<img alt="' . $row['name'] . '" src="' . $row['image_url'] . '"/>';
            echo '<h2>' . $row['name'] . '</h2>';
            echo '<p class="price">' . $row['price'] . ' Ft</p>';
            echo '<div class="actions">';
            echo '<button>Kosárba</button>';
            echo '<i class="fas fa-heart wishlist"></i>';
            echo '</div>';
            echo '</div>';
          }
        } else {
          echo "Nincsenek termékek.";
        }

        // Adatbázis kapcsolat bezárása
        $conn->close();
        ?>
      </div>
    </section>
  </main>
</body>
</html>
