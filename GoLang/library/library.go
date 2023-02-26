package main

import (
	"fmt"
	"time"
)

type Author struct {
	ID        int
	Name      string
	Birthdate time.Time
	Bio       string
}

type Category struct {
	ID   int
	Name string
}

type Book struct {
	ID              int
	Title           string
	Author          *Author
	PublicationDate time.Time
	ISBN            string
	Publisher       string
	Category        *Category
}

type Library struct {
	Books      []Book
	Authors    []Author
	Categories []Category
}

func (l *Library) GetAllBooks() []Book {
	return l.Books
}

func (l *Library) GetAllAuthors() []Author {
	return l.Authors
}

func (l *Library) GetAllCategories() []Category {
	return l.Categories
}

func (l *Library) AddBook(book Book) {
	l.Books = append(l.Books, book)
}

func (l *Library) AddAuthor(author Author) {
	l.Authors = append(l.Authors, author)
}

func (l *Library) AddCategory(category Category) {
	l.Categories = append(l.Categories, category)
}

func (l *Library) AddAuthorToBook(bookID int, author *Author) error {
	for i, book := range l.Books {
		if book.ID == bookID {
			l.Books[i].Author = author
			return nil
		}
	}
	return fmt.Errorf("book with ID %d not found", bookID)
}

func (l *Library) AddCategoryToBook(bookID int, category *Category) error {
	for i, book := range l.Books {
		if book.ID == bookID {
			l.Books[i].Category = category
			return nil
		}
	}
	return fmt.Errorf("book with ID %d not found", bookID)
}

func main() {
	author1 := Author{1, "J.K. Rowling", time.Date(1965, 7, 31, 0, 0, 0, 0, time.UTC), "British author, philanthropist, film producer, television producer, and screenwriter."}
	author2 := Author{2, "George Orwell", time.Date(1903, 6, 25, 0, 0, 0, 0, time.UTC), "English novelist and essayist."}
	author3 := Author{3, "Stephen King", time.Date(1947, 9, 21, 0, 0, 0, 0, time.UTC), "American author of horror, supernatural fiction, suspense, crime, science-fiction, and fantasy novels."}

	category1 := Category{1, "Fantasy"}
	category2 := Category{2, "Science Fiction"}
	category3 := Category{3, "Horror"}

	book1 := Book{1, "Harry Potter and the Philosopher's Stone", &author1, time.Date(1997, 6, 26, 0, 0, 0, 0, time.UTC), "9780747532743", "Bloomsbury Publishing", &category1}
	book2 := Book{2, "Nineteen Eighty-Four", &author2, time.Date(1949, 6, 8, 0, 0, 0, 0, time.UTC), "9780451524935", "Secker & Warburg", &category2}
	book3 := Book{3, "The Shining", &author3, time.Date(1977, 1, 28, 0, 0, 0, 0, time.UTC), "9780385121675", "Doubleday", &category3}

	library := Library{[]Book{book1, book2, book3}, []Author{author1, author2, author3}, []Category{category1, category2, category3}}

	books := library.GetAllBooks()
	authors := library.GetAllAuthors()
	categories := library.GetAllCategories()

	fmt.Println("Tüm Kitaplar:")
	for _, book := range books {
		fmt.Printf("ID: %d, Kitap Adı: %s, Yazar: %s, Kategori: %s\n", book.ID, book.Title, book.Author.Name, book.Category.Name)
	}
	fmt.Println("---------------------------------------------------------------------------:")

	fmt.Println("Tüm Yazar:")
	for _, author := range authors {
		fmt.Printf("ID: %d, Yazar Adı: %s, Dogum Tarihi: %s, Bio: %s\n", author.ID, author.Name, author.Birthdate, author.Bio)
	}
	fmt.Println("---------------------------------------------------------------------------:")

	fmt.Println("Tüm Kategoriler:")
	for _, category := range categories {
		fmt.Printf("ID: %d, Kategori Adı: %s\n", category.ID, category.Name)
	}

	fmt.Println("---------------------------------------------------------------------------:")

}
