def calc_score(throws):
    frame_number = 1
    balls_in_frame = 0
    frame_total = 0
    bonus = 0
    total = 0

    for x in throws:
        frame_total += x
        balls_in_frame += 1
        if bonus > 0:
            total += x
            bonus -= 1

        if balls_in_frame == 3 or frame_total == 15:
            if balls_in_frame < 3:
                bonus += (3 - balls_in_frame)
            frame_number += 1
            frame_total = 0
            balls_in_frame = 0
        total += x

    return total
