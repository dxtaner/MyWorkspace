import java.io.*;
import java.util.*;

interface IFilm {
    void setTitle(String title);
    String getTitle();
    void setDirector(String director);
    String getDirector();
    void setYear(int year);
    int getYear();
}

interface IFilmLibrary {
    void addFilm(IFilm film);
    void removeFilm(String title);
    List<IFilm> getFilms();
    List<IFilm> searchFilms(String query);
    int getTotalFilmCount();
}


class Film implements IFilm {
    private String title;
    private String director;
    private int year;

    @Override
    public void setTitle(String title) {
        this.title = title;
    }

    @Override
    public String getTitle() {
        return title;
    }

    @Override
    public void setDirector(String director) {
        this.director = director;
    }

    @Override
    public String getDirector() {
        return director;
    }

    @Override
    public void setYear(int year) {
        this.year = year;
    }

    @Override
    public int getYear() {
        return year;
    }
}

class FilmLibrary implements IFilmLibrary {
    private List<IFilm> films = new ArrayList<>();

    @Override
    public void addFilm(IFilm film) {
        films.add(film);
    }

    @Override
    public void removeFilm(String title) {
        Iterator<IFilm> iterator = films.iterator();
        while (iterator.hasNext()) {
            IFilm film = iterator.next();
            if (film.getTitle().equals(title)) {
                iterator.remove();
            }
        }
    }

    @Override
    public List<IFilm> getFilms() {
        return films;
    }

    @Override
    public List<IFilm> searchFilms(String query) {
        List<IFilm> results = new ArrayList<>();
        for (IFilm film : films) {
            if (film.getTitle().contains(query) || film.getDirector().contains(query)) {
                results.add(film);
            }
        }
        return results;
    }

    @Override
    public int getTotalFilmCount() {
        return films.size();
    }
}

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        PrintWriter out = new PrintWriter(System.out);

        IFilmLibrary filmLibrary = new FilmLibrary();
        List<IFilm> films = new ArrayList<>();
        int fCount = Integer.parseInt(br.readLine().trim());
        for (int i = 1; i <= fCount; i++) {
            String[] a = br.readLine().trim().split(" ");
            IFilm e = new Film();
            e.setTitle(a[0]);
            e.setDirector(a[1]);
            e.setYear(Integer.parseInt(a[2]));

            filmLibrary.addFilm(e);
            films.add(e);
        }
        int totalFilmCount = filmLibrary.getTotalFilmCount();
        out.println("Total Film Count: " + totalFilmCount);
        String[] b = br.readLine().trim().split(" ");
        String query = b[0];
        List<IFilm> searchResults = filmLibrary.searchFilms(query);
        out.println("Search Results for " + query + ":");
        for (IFilm film : searchResults) {
            out.println(film.getTitle() + " (" + film.getDirector() + ", " + film.getYear() + ")");
        }
        String[] c = br.readLine().trim().split(" ");
        String title = c[0];
        IFilm randomFilm = null;
        for (IFilm film : films) {
            if (film.getTitle().equals(title)) {
                randomFilm = film;
                break;
            }
        }
        if (randomFilm != null) {
            filmLibrary.removeFilm(randomFilm.getTitle());
            out.println("Removed Film: " + randomFilm.getTitle() + " (" + randomFilm.getDirector() + ", " + randomFilm.getYear() + ")");
        }

        List<IFilm> allFilms = filmLibrary.getFilms();
        out.println("All Films:");
        for (IFilm film : allFilms) {
            out.println(film.getTitle() + " (" + film.getDirector() + ", " + film.getYear() + ")");
        }

        out.flush();
        out.close();
    }
}